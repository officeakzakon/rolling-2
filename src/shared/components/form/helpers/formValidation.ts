export interface IInputOptions {
  bigLitters?: boolean;
  setStartPlus?: boolean;
  onlyNumbers?: boolean;
}
const numRegex = /^\d+$/;

export const formValidation = (value: string, options?: IInputOptions) => {
  if (options && value) {
    const { onlyNumbers } = options;
    if (onlyNumbers) {
      if (!numRegex.test(value)) {
        return false;
      }
    }
  }

  return true;
};
