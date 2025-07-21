if (Platform.isLoaded("create_crystal_clear")) {
    ServerEvents.recipes(event => {
        let tweak_glass_casing = (name) => {
            // event.remove({ output: ("create_crystal_clear:" + name + "_glass_casing") })
            event.remove({ id: (`create_crystal_clear:${name}_clear_glass_casing`) })
            event.custom({
                type: "create:item_application",
                ingredients: [
                    { item: `create_crystal_clear:${name}_casing` },
                    { item: "tconstruct:clear_glass" }
                ],
                results: [
                    {	item: `create_crystal_clear:${name}_clear_glass_casing` }
                ]
            }).id(`kubejs:mods/create_crystal_clear/item_application/${name}_clear_glass_casing`)
            event.shapeless(`create_crystal_clear:${name}_glass_casing`, [`create:${name}_casing`, "minecraft:glass"]).id("kubejs:mods/create_crystal_clear/" + name + "_glass_casing")
            event.shapeless(`create_crystal_clear:${name}_clear_glass_casing`, [`create:${name}_casing`, "tconstruct:clear_glass"]).id("kubejs:mods/create_crystal_clear/" + name + "_clear_glass_casing")
        }

        tweak_glass_casing("andesite")
        tweak_glass_casing("copper")
        tweak_glass_casing("brass")

        event.remove({ id: ("create_crystal_clear:train_clear_glass_casing") })
        event.custom({
            type: "create:item_application",
            ingredients: [
                { item: "create:railway_casing" },
                { item: "tconstruct:clear_glass" }
            ],
            results: [
                {	item: "create_crystal_clear:train_clear_glass_casing" }
            ]
        }).id("kubejs:mods/create_crystal_clear/item_application/train_clear_glass_casing")
        event.shapeless("create_crystal_clear:train_glass_casing", ["create:railway_casing", "minecraft:glass"]).id("kubejs:mods/create_crystal_clear/train_glass_casing")
        event.shapeless("create_crystal_clear:train_clear_glass_casing", ["create:railway_casing", "tconstruct:clear_glass"]).id("kubejs:mods/create_crystal_clear/train_clear_glass_casing")
    })

    ServerEvents.blockLootTables(event => {
        // Fix broken loot tables
        let cogwheelDrop = {
            type: "minecraft:block",
            pools: [
                {
                    rolls: 1,
                    entries: [
                        {
                            type: "minecraft:item",
                            conditions: [{ condition: "minecraft:survives_explosion" }],
                            name: "create:large_cogwheel"
                        }
                    ]
                }
            ]
        }
        let cogwheelCasings = ["andesite", "brass", "train"]
        cogwheelCasings.forEach(casing=>{
            event.addJson(`create_crystal_clear:${casing}_glass_encased_large_cogwheel`, cogwheelDrop)
            event.addJson(`create_crystal_clear:${casing}_clear_glass_encased_large_cogwheel`, cogwheelDrop)
        })
    })
}
