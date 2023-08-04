import { useLoaderData, useParams } from 'react-router-dom'

const CareerDetails = () => {
  const { id } = useParams()
  const career = useLoaderData()
  return (
    <div className="career-details">
      <h2>career details for: {career.title}</h2>
      <p>starting salary: {career.salary}</p>
      <p>location: {career.location}</p>
      <p>
        details: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?"
      </p>
    </div>
  )
}

export default CareerDetails

export const careerDetailsLoader = async ( { params } ) => {
  const { id } = params
  const res = await fetch('http://localhost:4000/careers/' + id)
  return res.json()
}
