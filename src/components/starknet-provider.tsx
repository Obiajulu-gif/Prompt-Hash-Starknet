'use client'

import { ReactNode } from "react"
import {
    argent,
    braavos,
    publicProvider,
    ready,
    StarknetConfig,
    useInjectedConnectors,
    voyager
} from "@starknet-react/core"
import { mainnet, sepolia } from "@starknet-react/chains"

export function StarknetProvider({ children }: {
    children: ReactNode
}) {

    const { connectors } = useInjectedConnectors({
        recommended: [ready(), braavos()],
        includeRecommended: 'always',
        order: "alphabetical",
    })

    return (
        <StarknetConfig
            chains={[mainnet, sepolia]}
            provider={publicProvider()}
            connectors={connectors}
            explorer={voyager}
        >
            {children}
        </StarknetConfig>
    );
}