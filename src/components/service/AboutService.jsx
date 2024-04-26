const url = `${process.env.REACT_APP_API_URL}/about/info`;


export const listAbouts = async() => {
    return await fetch(url)
}
