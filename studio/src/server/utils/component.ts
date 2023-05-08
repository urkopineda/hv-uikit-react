const exclude = ["Overview/", "Foundation/", "Guides/", "Templates/"];

export const filterStories = (stories) => Object.values(stories).reduce((acc: any, story: any) => {
    const isExcluded = exclude.some(
        (p) => story.title.includes(p) || !story.id.includes("--main")
    );

    if (!isExcluded)
        acc.push({
            name: story.title.split("/").pop(),
            category: story.title.split("/").shift(),
        });

    return acc;
}, []);