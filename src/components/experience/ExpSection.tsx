
import './ExpSection.css'

const ExpSection = ({data:{}}) => {
  return (
    <section className="experience__section">
      {
         Object.entries(data).map(([key, value]) => {
          
        return(
          
          <div className="cover" key={key}>
           
            <span className="icon">
            {value.icon}
            </span>
           
            <p>{value.text}</p>
          </div>
        )
      })
      }
    </section>
  )
}

export default ExpSection