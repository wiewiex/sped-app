import {
  ReactNode,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';

interface IAppContext {
  showAddAddressModal: boolean;
  setShowAddAddressModal: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<IAppContext>({
  showAddAddressModal: false,
  setShowAddAddressModal: () => {},
});

export const useAppContext = () => useContext(AppContext) as IAppContext;

export const AppContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [showAddAddressModal, setShowAddAddressModal] =
    useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{ showAddAddressModal, setShowAddAddressModal }}
    >
      {children}
    </AppContext.Provider>
  );
};
