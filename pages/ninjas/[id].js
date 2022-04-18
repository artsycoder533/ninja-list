export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  const paths = data.map((user) => {
    return {
      // use toString because this is initially an integer we need it to be a string
      params: { id: user.id.toString() },
    };
  });
  return {
    paths,
    //add fallback:false so that if a user tries to visit a route that doesnt exist is shows a 404 page
    fallback: false,
  };
};

//this function is run for every id that is returned from getStaticPaths
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();
  return {
    props: {
      ninja: data,
    },
  };
};

const Details = ({ ninja }) => {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.phone}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  );
};

export default Details;
