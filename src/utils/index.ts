export function RandomColors() {
    const bgColors = ['#FFE8D6', '#E6F8F7', '#DCC8FF']
    const textColors = ['#F66D21', '#0ABAB5', '#8A4FFF']
    const randomBgColors = [...bgColors].sort(() => Math.random())
    const randomTextColors = [...textColors].sort(() => Math.random())

    return { bgColors, textColors, randomBgColors, randomTextColors }
}