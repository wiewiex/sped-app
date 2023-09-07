import {
  ReactNode,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';

interface IAppContext {
  showAddressModal: boolean;
  setShowAddressModal: Dispatch<SetStateAction<boolean>>;
  showClientModal: boolean;
  setShowClientModal: Dispatch<SetStateAction<boolean>>;
  showCarrierModal: boolean;
  setShowCarrierModal: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<IAppContext>({
  showAddressModal: false,
  setShowAddressModal: () => {},
  showClientModal: false,
  setShowClientModal: () => {},
  showCarrierModal: false,
  setShowCarrierModal: () => {},
});

export const useAppContext = () => useContext(AppContext) as IAppContext;

export const AppContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [showAddressModal, setShowAddressModal] = useState<boolean>(false);
  const [showClientModal, setShowClientModal] = useState<boolean>(false);
  const [showCarrierModal, setShowCarrierModal] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        showAddressModal,
        setShowAddressModal,
        showClientModal,
        setShowClientModal,
        showCarrierModal,
        setShowCarrierModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
