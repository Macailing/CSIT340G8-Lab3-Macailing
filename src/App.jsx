import './App.css'

const Header = (props) => {
  return <h1 className="text-2xl font-bold text-slate-900">{props.course}</h1>
}

const Part = (props) => {
  return <p className="text-slate-700">{props.part.name} {props.part.units} units</p>
}

const Content = (props) => {
  return (
    <div className="mt-4 space-y-2">
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  )
}

const Total = (props) => {
  return <p className="mt-4 font-semibold text-slate-900">Total units: {props.total}</p>
}

const Footer = (props) => {
  return (
    <footer className="mt-8 border-t border-slate-300 pt-3 text-sm text-slate-500">
      {props.name} - {props.code} - {props.section}
    </footer>
  )
}

const App = () => {
  const course = 'CSIT340'
  const part1 = { name: 'CSIT340', units: 3 }
  const part2 = { name: 'IT317', units: 3 }
  const part3 = { name: 'CSIT321', units: 3 }

  const fullName = 'Ser Raineir Benedict U. Macailing'
  const code = 'CSIT340'
  const section = 'G8'

  return (
    <div className="mx-auto mt-10 max-w-xl rounded-lg bg-white p-6 shadow">
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={part1.units + part2.units + part3.units} />
      <Footer name={fullName} code={code} section={section} />
    </div>
  )
}

export default App