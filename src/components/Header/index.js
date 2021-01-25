import Head from 'next/head'
import db from '../../../db.json'

export default function IndexPage() {
    return (
        <Head>
            <meta name="title" content="Quiz Franquia Pokémon" />
            <meta name="description" content="Teste seus conhecimentos sobre a franquia de monstros de bolso mais famosa do mundo." />
 
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://pokemon-quiz.neorogerio.vercel.app/" />
            <meta property="og:title" content="Quiz Franquia Pokémon" />
            <meta property="og:description" content="Teste seus conhecimentos sobre a franquia de monstros de bolso mais famosa do mundo." />
            <meta property="og:image" content={db.bg} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="og:image:width" content="800" />
            <meta property="og:image:height" content="600" />

            <meta property="twitter:card" content="sumary_large_image" />
            <meta property="twitter:url" content="https://pokemon-quiz.neorogerio.vercel.app/" />
            <meta property="twitter:title" content="Quiz Franquia Pokémon" />
            <meta property="twitter:description" content="Teste seus conhecimentos sobre a franquia de monstros de bolso mais famosa do mundo." />
            <meta property="twitter:creator" content="@neorogerio" />
            <meta property="twitter:image" content={db.bg} />
        </Head>
    )
}