
import './ExpSection.css'



const ExpSection = ({dataProps}:any) => {


  
 
  return (
    <section className="experience__section">
      {
         Object.entries(dataProps).map(([key, value]) => {
          const valueX:any = value;
    
        return(
          
          <div className="cover" key={key}>
           
            <span className="icon">
            {valueX.icon}
            {console.log(valueX)};
            
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