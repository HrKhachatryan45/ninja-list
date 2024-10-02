import Head from "next/head";

function About(props) {
    return (
        <>
    <Head>
        <title>
            Ninja List | About
        </title>
        <meta name={'keywords'} content={'Ninjas'}/>
    </Head>
        <div>
            <h1>About</h1>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor</p>
        </div>
        </>
    );
}

export default About;