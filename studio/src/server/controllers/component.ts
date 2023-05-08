import fetch from "node-fetch";

import { filterStories } from "../utils/component";

export const getComponents = async (_, res) => {
    try {
        const response = await fetch(
            "https://lumada-design.github.io/uikit/master/stories.json"
        );

        const { stories } = await response.json();
        const filtered = filterStories(stories);

        res.status(200).json(filtered);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};