import { FactoryProvider, NotImplementedException } from '@nestjs/common';

function bypassNestJSInitialization(accessedProperty: string) {
  if (accessedProperty === 'then') {
    return Promise.resolve();
  }
  if (['onModuleInit', 'onApplicationBootstrap'].includes(accessedProperty)) {
    return;
  }
  return 'throw_unimplemented';
}

function getNotImplementedErrorMessage(methodName: string, className: string) {
  return `Method \`${methodName}\` for class \`${className}\` is not implemented.`
}

const getNotImplementedProxy = (provide: FactoryProvider["provide"]) => new Proxy({}, {
  get(target, accessedProperty, receiver) {
    const returnValue = bypassNestJSInitialization(accessedProperty as string);
    if(returnValue === 'throw_unimplemented') {
      const message = getNotImplementedErrorMessage(accessedProperty as string, (provide as any).name);
      console.error(message);
      throw new NotImplementedException(message);
    }
    return returnValue;
  }
});

export function UnImplemented(provide: FactoryProvider["provide"]) {
  return {
    provide,
    useFactory: () => getNotImplementedProxy(provide),
  } as FactoryProvider;
}