import { ClassProvider } from '@nestjs/common';

export function Implemented(provide: ClassProvider["provide"], useClass: ClassProvider["useClass"]) {
  return {
    provide,
    useClass
  } as ClassProvider;
}