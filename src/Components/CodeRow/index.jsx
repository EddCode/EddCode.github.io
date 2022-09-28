import './code-row.css'

const SymbolCode = ({ ident = false, symbols = {} }) => {
  return (
    <div className={`row ${ident ? 'symbol-ident' : ''}`}>
      {
        Object.values(symbols)?.map(symbol => (
          <span key={symbol.join('')} className={`symbol ${symbol.join(' ')}`} />
        ))
      }
    </div>
  )
}

export default SymbolCode
