import '../styles/tokens-grid.css'

interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
}

export function TokensGrid({ tokens, hasRemValue = false }: TokensGridProps) {
  function calculatePx(value: string) {
    const numericValue = Number(value.replace('rem', ''))

    return isNaN(numericValue) ? '0px' : `${numericValue * 16} px`
  }

  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
            {hasRemValue && <td>{calculatePx(value)}</td>}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
