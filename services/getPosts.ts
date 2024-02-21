export async function getAllPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: {
            revalidate: 60
        }
    })

    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }

    return res.json()
}

export async function getPostsBySearch(search: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}`, {
        next: {
            revalidate: 60
        }
    })

    if (!res.ok) throw new Error("Failed to fetch data")

    return res.json()
}
