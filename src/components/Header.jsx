import NewBudget from "./NewBudget"

const Header = ({
    presupuesto, 
    setPresupuesto, 
    isValidPresupuesto, 
    setIsValidPresupuesto}) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>
        <NewBudget
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
        />
    </header>
  )
}

export default Header