if (Platform.isLoaded("dungeoncrawl")) {
    ServerEvents.lowPriorityData(event => {
        event.addJson("dungeoncrawl:worldgen/structure_set/dungeons", {
            "structures": [
                {
                    "structure": "dungeoncrawl:dungeon",
                    "weight": 1
                }
            ],
            "placement": {
                "type": "integrated_api:advanced_random_spread",
                "super_exclusion_zone": {
                    "chunk_count": 12,
                    "other_set": "#cabin:dungeon_crawl_avoid"
                },
                "salt": 10387313,
                "spacing": 32,
                "separation": 12
            }
        })
    })
}
