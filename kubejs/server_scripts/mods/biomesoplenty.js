if(Platform.isLoaded("biomesoplenty")) {
    wood_types.push("biomesoplenty:fir")
    wood_types.push("biomesoplenty:pine")
    wood_types.push("biomesoplenty:maple")
    wood_types.push("biomesoplenty:redwood")
    wood_types.push("biomesoplenty:mahogany")
    wood_types.push("biomesoplenty:jacaranda")
    wood_types.push("biomesoplenty:palm")
    wood_types.push("biomesoplenty:willow")
    wood_types.push("biomesoplenty:dead")
    wood_types.push("biomesoplenty:magic")
    wood_types.push("biomesoplenty:umbran")
    wood_types.push("biomesoplenty:hellbark")
    wood_types.push("biomesoplenty:empyreal")

    ServerEvents.tags("item", event => {
        // Has the block tag but not the item tag
        event.add("minecraft:flowers", "biomesoplenty:waterlily")

        event.get("forge:vines").add("biomesoplenty:willow_vine").add("biomesoplenty:spanish_moss")

        event.get("kubejs:strainer/sands").add("biomesoplenty:white_sand").add("biomesoplenty:orange_sand")
    })
    ServerEvents.recipes(event => {
        // Tree Extracting recipes for leaves that don't match their log names
        addTreeOutput(event, "minecraft:oak_log", "biomesoplenty:origin_leaves")
        addTreeOutput(event, "minecraft:oak_log", "biomesoplenty:flowering_oak_leaves")
        addTreeOutput(event, "minecraft:spruce_log", "biomesoplenty:cypress_leaves")
        addTreeOutput(event, "minecraft:birch_log", "biomesoplenty:rainbow_birch_leaves")
        addTreeOutput(event, "minecraft:cherry_log", "biomesoplenty:snowblossom_leaves")
        addTreeOutput(event, "biomesoplenty:maple_log", "biomesoplenty:yellow_maple_leaves")
        addTreeOutput(event, "biomesoplenty:maple_log", "biomesoplenty:orange_maple_leaves")
        addTreeOutput(event, "biomesoplenty:maple_log", "biomesoplenty:red_maple_leaves")

        // kubejs throws a duplicate recipe error, we'd need to change how resin recipes are created to avoid that error
        // event.custom({
        // 	type: "thermal:tree_extractor",
        // 	trunk: {
        // 		Name: "biomesoplenty:magic_log",
        // 		Properties: {
        // 			axis: "y"
        // 		}
        // 	},
        // 	leaves: {
        // 		Name: "biomesoplenty:magic_leaves",
        // 		Properties: {
        // 			persistent: "false"
        // 		}
        // 	},
        // 	result: {
        // 		fluid: "create:potion",
        // 		amount: 25,
        // 		nbt: {
        // 			Bottle: 'REGULAR',
        // 			Potion: "minecraft:thick"
        // 		}
        // 	}
        // })//.id('kubejs:devices/tree_extractor/tree_extractor_magic')

        // Wash sand into clay
        event.recipes.create.splashing([Item.of("minecraft:clay_ball", 1).withChance(0.25)], "biomesoplenty:black_sand")
        event.recipes.create.splashing([Item.of("minecraft:clay_ball", 1).withChance(0.25)], "biomesoplenty:white_sand")
        event.recipes.create.splashing([Item.of("minecraft:clay_ball", 1).withChance(0.25)], "biomesoplenty:orange_sand")
        // Flesh igeneous extruder recipe.
        event.custom({
            "type": "thermal:rock_gen",
            "adjacent": "biomesoplenty:blood",
            "result": { "item": "biomesoplenty:flesh"}
        })
    })

    // Fix biome tags
    // onEvent("tags.worldgen.biome", event=>{
    // 	const BOP_OVERWORLD = [
    // 		"biomesoplenty:bamboo_grove",
    // 		"biomesoplenty:bayou",
    // 		"biomesoplenty:bog",
    // 		"biomesoplenty:boreal_forest",
    // 		"biomesoplenty:cherry_blossom_grove",
    // 		"biomesoplenty:clover_patch",
    // 		"biomesoplenty:cold_desert",
    // 		"biomesoplenty:coniferous_forest",
    // 		"biomesoplenty:crag",
    // 		"biomesoplenty:dead_forest",
    // 		"biomesoplenty:dryland",
    // 		"biomesoplenty:dune_beach",
    // 		"biomesoplenty:field",
    // 		"biomesoplenty:fir_clearing",
    // 		"biomesoplenty:floodplain",
    // 		"biomesoplenty:forested_field",
    // 		"biomesoplenty:fungal_jungle",
    // 		"biomesoplenty:glowing_grotto",
    // 		"biomesoplenty:grassland",
    // 		"biomesoplenty:highland",
    // 		"biomesoplenty:highland_moor",
    // 		"biomesoplenty:jade_cliffs",
    // 		"biomesoplenty:lavender_field",
    // 		"biomesoplenty:lavender_forest",
    // 		"biomesoplenty:lush_desert",
    // 		"biomesoplenty:lush_savanna",
    // 		"biomesoplenty:maple_woods",
    // 		"biomesoplenty:marsh",
    // 		"biomesoplenty:mediterranean_forest",
    // 		"biomesoplenty:muskeg",
    // 		"biomesoplenty:mystic_grove",
    // 		"biomesoplenty:old_growth_dead_forest",
    // 		"biomesoplenty:old_growth_woodland",
    // 		"biomesoplenty:ominous_woods",
    // 		"biomesoplenty:orchard",
    // 		"biomesoplenty:origin_valley",
    // 		"biomesoplenty:pasture",
    // 		"biomesoplenty:prairie",
    // 		"biomesoplenty:pumpkin_patch",
    // 		"biomesoplenty:rainbow_hills",
    // 		"biomesoplenty:rainforest",
    // 		"biomesoplenty:redwood_forest",
    // 		"biomesoplenty:rocky_rainforest",
    // 		"biomesoplenty:rocky_shrubland",
    // 		"biomesoplenty:scrubland",
    // 		"biomesoplenty:seasonal_forest",
    // 		"biomesoplenty:shrubland",
    // 		"biomesoplenty:snowy_coniferous_forest",
    // 		"biomesoplenty:snowy_fir_clearing",
    // 		"biomesoplenty:snowy_maple_woods",
    // 		"biomesoplenty:spider_nest",
    // 		"biomesoplenty:tropics",
    // 		"biomesoplenty:tundra",
    // 		"biomesoplenty:volcanic_plains",
    // 		"biomesoplenty:volcano",
    // 		"biomesoplenty:wasteland",
    // 		"biomesoplenty:wetland",
    // 		"biomesoplenty:wooded_scrubland",
    // 		"biomesoplenty:wooded_wasteland",
    // 		"biomesoplenty:woodland"
    // 	]
    // 	event.get("forge:is_overworld").add(BOP_OVERWORLD)
    // 	event.get("ae2:has_meteorites").add(BOP_OVERWORLD)
    // })
}
