
import './ExpSection.css'


const ExpSection: React.FC<React.ReactNode> = ({data}:any) => {
 
  return (
    <section className="experience__section">
      {
         Object.entries(data).map(([key, value]) => {
          const valueX:any = value;
    
        return(
          
          <div className="cover" key={key}>
           
            <span className="icon">
            {valueX.icon}
            </span>
           
            <p>{valueX.text}</p>
          </div>
        )
      })
      }
    </section>
  )
}

export default ExpSection