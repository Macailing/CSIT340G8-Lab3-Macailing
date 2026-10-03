import './App.css'

const Header = (props) => {
  return <h1 className="text-2xl font-bold text-slate-900">{props.course}</h1>
}

const Content = (props) => {
  return (
    <div className="mt-4 space-y-2">
      <p className="text-slate-700">{props.part1} {props.units1} units</p>
      <p className="text-slate-700">{props.part2} {props.units2} units</p>
      <p className="text-slate-700">{props.part3} {props.units3} units</p>
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
  const course = 'Your Real CIT-U Subject Title'
  const part1 = 'CSIT321'
  const units1 = 3
  const part2 = 'CSIT340'
  const units2 = 3
  const part3 = 'IT317'
  const units3 = 2

  const fullName = 'SER RAINEIR BENEDICT U. MACAILING'
  const code = 'CSIT340'
  const section = 'G8'

  return (
    <div className="mx-auto mt-10 max-w-xl rounded-lg bg-white p-6 shadow">
      <Header course={course} />
      <Content
        part1={part1} units1={units1}
        part2={part2} units2={units2}
        part3={part3} units3={units3}
      />
      <Total total={units1 + units2 + units3} />
      <Footer name={fullName} code={code} section={section} />
    </div>
  )
}

export default App