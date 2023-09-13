function ParameterLogger(
  target: any,
  methodName: string,
  parameterIndex: number
) {
  console.log(
    `Parameter ${parameterIndex + 1} of ${methodName} has been accessed.`
  );
}

export class ParametersLoggerCase {
  exampleMethod(
    @ParameterLogger param1: string,
    @ParameterLogger param2: number
  ) {
    console.log(`Inside exampleMethod - ${param1} - ${param2}`);
  }
}
