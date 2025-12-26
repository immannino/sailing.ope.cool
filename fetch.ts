const url = 'https://secure.runescape.com/m=hiscore_oldschool/index_lite.json?player=good_barn'

try {
    const data = await fetch(url)
    const res = await data.json()
    const sailing = res.skills.find(({ name }) => name === 'Sailing')
    console.log(sailing)

    const sailingData = { ...sailing, timestamp: new Date() }
    Deno.writeTextFileSync('./skills.json', JSON.stringify(res.skills))
    console.log('wrote files')
    Deno.writeTextFileSync('./sailing.json', JSON.stringify(sailing))
    console.log('wrote files')
} catch (err) {
    console.log(err)
}