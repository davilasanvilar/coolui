import { createContext, ReactNode, useContext, useState } from 'react';


export interface MiscContext {
  isLoading: boolean,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  clearContext: boolean,
  setClearContext: React.Dispatch<React.SetStateAction<boolean>>,
  openSidebar: boolean,
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>,
  blockedSidebar: boolean,
  setBlockedSidebar: React.Dispatch<React.SetStateAction<boolean>>,
}

const MiscContext = createContext<MiscContext>({} as any)

export const useMisc = () => {
  const ctx = useContext(MiscContext)
  if (ctx === null) {
    throw new Error('useMisc() can only be used on the descendants of MiscProvider')
  } else {
    return ctx
  }
}

export const MiscProvider = ({ children }: { children: ReactNode }) => {

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [clearContext, setClearContext] = useState<boolean>(false)
  //This state manages when the sidebar starts the animation for open/close
  const [openSidebar, setOpenSidebar] = useState<boolean>(false)
  //This state blocks the sidebar when its doing the open/close animation
  const [blockedSidebar, setBlockedSidebar] = useState<boolean>(false)


  const value: MiscContext = {
    isLoading, setIsLoading, clearContext, setClearContext,
    openSidebar, setOpenSidebar, blockedSidebar, setBlockedSidebar
  }

  return (
    <MiscContext.Provider value={value}>
      {children}
    </MiscContext.Provider>
  )
}
