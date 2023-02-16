import { createContext, ReactNode, useContext, useState } from 'react';


export interface MiscContext {
  isLoading: boolean,
  clearContext: boolean,
  setClearContext: React.Dispatch<React.SetStateAction<boolean>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
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


  const value: MiscContext = {
    isLoading, setIsLoading, clearContext, setClearContext
  }

  return (
    <MiscContext.Provider value={value}>
      {children}
    </MiscContext.Provider>
  )
}
