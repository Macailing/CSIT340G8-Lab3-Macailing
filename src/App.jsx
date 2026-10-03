import './App.css'

const Header = (props) => {
  return <h1 className="text-2xl font-bold text-slate-900">{props.course.name}</h1>
}

const Part = (props) => {
  return <p className="text-slate-700">{props.part.name} {props.part.units} units</p>
}

const Content = (props) => {
  return (
    <div className="mt-4 space-y-2">
      <Part part={props.course.parts[0]} />
      <Part part={props.course.parts[1]} />
      <Part part={props.course.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  const parts = props.course.parts
  return (
    <p className="mt-4 font-semibold text-slate-900">
      Total units: {parts[0].units + parts[1].units + parts[2].units}
    </p>
  )
}

const Footer = (props) => {
  return (
    <footer className="mt-8 border-t border-slate-300 pt-3 text-sm text-slate-500">
      {props.name} - {props.code} - {props.section}
    </footer>
  )
}

const App = () => {
  const course = {
    name: 'CSIT340',
    parts: [
      { name: 'CSIT340', units: 3 },
      { name: 'IT317', units: 3 },
      { name: 'CSIT321', units: 3 },
    ],
  }

  const fullName = 'SER RAINEIR BENEDICT U. MACAILING'
  const code = 'CSIT340'
  const section = 'G8'

  return (
    <div className="mx-auto mt-10 max-w-xl rounded-lg bg-white p-6 shadow">
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
      <Footer name={fullName} code={code} section={section} />
    </div>
  )
}

export default App