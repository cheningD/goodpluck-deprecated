import React from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { RecoilRoot } from 'recoil'

type Options = Omit<RenderOptions, 'queries'>

type InitializeState = Array<{
  atom: any
  value: any
}>

const customRender = (ui: React.ReactElement<any>, options?: Options, state?: InitializeState) =>
  render(ui, {
    wrapper: ({ children }) => {
      return (
        <RecoilRoot
          initializeState={({ set }) => {
            if (state?.length) {
              state.forEach(atomState => set(atomState.atom, atomState.value))
            }
          }}
        >
          {children}
        </RecoilRoot>
      )
    },
    ...options,
  })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
