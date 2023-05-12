export interface IFloatingModalHook {
  setIsOpen: (newValue: boolean) => void;
}

export interface IFloatingModalProps extends IFloatingModalHook {
  open: boolean;
}
