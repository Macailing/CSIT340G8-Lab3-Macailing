import './App.css'

const Header = (props) => {
  return <h1 className="text-2xl font-bold text-slate-900">{props.course}</h1>
}

const Part = (props) => {
  return <p className="text-slate-700">{props.name} {props.units} units</p>
}

const Content = (props) => {
  return (
    <div className="mt-4 space-y-2">
      <Part name={props.part1} units={props.units1} />
      <Part name={props.part2} units={props.units2} />
      <Part name={props.part3} units={props.units3} />
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
  const part1 = 'CSIT340'
  const units1 = 3
  const part2 = 'IT317'
  const units2 = 3
  const part3 = 'CSIT321'
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