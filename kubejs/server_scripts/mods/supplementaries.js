if (Platform.isLoaded("supplementaries")) {
    ServerEvents.recipes(event => {
        // Lumisene
        event.custom({
            "type": "tconstruct:melting",
            "ingredient": {"item": "minecraft:glow_berries"},
            "result": {
                "fluid": "supplementaries:lumisene",
                "amount": 125
            },
            "temperature": 200,
            "time": 6
        }).id("kubejs:smeltery/melting/lumisene")

        event.recipes.thermal.crucible(Fluid.of("supplementaries:lumisene", 125), "minecraft:glow_berries", 0, 1000)

        event.recipes.create.filling("supplementaries:lumisene_bottle", ["minecraft:glass_bottle", Fluid.of("supplementaries:lumisene", 250).toJson()])
        event.recipes.create.emptying([Fluid.of("supplementaries:lumisene", 250), "minecraft:glass_bottle"], "supplementaries:lumisene_bottle")

        // Timber Frame
        event.remove({ id:"supplementaries:timber_frame" })
        donutCraft(event, Item.of("supplementaries:timber_frame", 2), "minecraft:air", "#forge:rods/wooden")

        event.stonecutting("supplementaries:timber_frame", "#kubejs:timber_frame")
        event.stonecutting("supplementaries:timber_brace", "#kubejs:timber_frame")
        event.stonecutting("supplementaries:timber_cross_brace", "#kubejs:timber_frame")

        // Fix crafting table dye removal recipes for these items
        event.shapeless(Item.of("create:copper_valve_handle"), ["#create:valve_handles","supplementaries:soap"] ).id("kubejs:soap_clean_valve_handle_manual_only")
        // Copy the NBT data for this one so that removing dye doesn't eat our stuff.
        event.shapeless(Item.of("create:brown_toolbox"), ["#create:toolboxes","supplementaries:soap"] ).id("kubejs:soap_clean_toolbox_manual_only").modifyResult((grid, result) => {
            const item = grid.find(Ingredient.of("#create:toolboxes"))
            return result.withNBT(item.nbt)
        })
    })

    ServerEvents.tags("item", event => {
        event.get("kubejs:timber_frame")
            .add("supplementaries:timber_frame")
            .add("supplementaries:timber_brace")
            .add("supplementaries:timber_cross_brace")
    })

    ServerEvents.tags("block", event => {
        // Whitelist these items to allow the removal of dye in-world using soap (see supplementaries common config)
        const dyedHandles = event.get("create:valve_handles").getObjectIds()
        const dyedHandlesBlacklist = Ingredient.of(/.*copper.*/)
        dyedHandles.forEach(handle => {
            if (!dyedHandlesBlacklist.test(handle)) event.add("kubejs:valve_handles_dyed", handle)
        })
        const dyedToolboxes = event.get("create:toolboxes").getObjectIds()
        const dyedToolboxesBlacklist = Ingredient.of(/.*brown.*/)
        dyedToolboxes.forEach(toolbox => {
            if (!dyedToolboxesBlacklist.test(toolbox)) event.add("kubejs:toolboxes_dyed", toolbox)
        })
    })
}
