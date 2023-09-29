import * as R from "ramda";

export const isNilOrEmpty = <T>(data: T) =>
  R.or(R.isEmpty(data), R.isNil(data));
