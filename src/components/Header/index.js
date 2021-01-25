import Head from 'next/head'
import db from '../../../db.json'

export default function IndexPage() {
    return (
        <Head>
            <title>Quiz Franquia Pokémon</title>
            <meta property="og:title" content="Quiz Fraquia Pokémon" />
            <meta property="og:description" content="Teste seus conhecimentos sobre a franquia de monstros de bolso mais famosa do mundo." />
            <meta property="og:image" content={db.bg} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="og:image:width" content="800" />
            <meta property="og:image:height" content="600" />
        </Head>
    )
}