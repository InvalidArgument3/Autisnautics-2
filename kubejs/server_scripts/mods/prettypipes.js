if (Platform.isLoaded("prettypipes")) {
    ServerEvents.recipes(event => {
        // There are so few recipes that we want to keep that we're better off removing them all
        event.remove({ mod: "prettypipes" })
        // machine recipes
        brassMachine(event, Item.of("prettypipes:item_terminal", 1), "thermal:diamond_gear")
        brassMachine(event, Item.of("prettypipes:pressurizer", 1), "create:propeller")

        event.shaped(Item.of("prettypipes:pipe", 8), [
            "PMP"
        ], {
            P: "create:brass_sheet",
            M: "create:brass_ingot"
        })
        event.shaped("prettypipes:wrench", [
            "PI ",
            "II ",
            "  R"
        ], {
            P: "prettypipes:pipe",
            I: "#forge:ingots/iron",
            R: "#forge:dyes/red"
        })
        event.shaped("prettypipes:crafting_terminal", [
            " T ",
            "RIR",
            " R "
        ], {
            T: "minecraft:crafting_table",
            I: "prettypipes:item_terminal",
            R: "#forge:dusts/redstone"
        })
        event.shapeless("prettypipes:pipe_frame", ["minecraft:item_frame", "prettypipes:pipe", "#forge:dusts/redstone"])

        let module = (type, result) => {
            // event.remove({ output: "prettypipes:"+result })
            event.stonecutting("prettypipes:" + result, "kubejs:pipe_module_" + type)
        }

        module("utility", "filter_increase_modifier")
        module("utility", "tag_filter_modifier")
        module("utility", "mod_filter_modifier")
        module("utility", "nbt_filter_modifier")
        module("utility", "damage_filter_modifier")
        module("utility", "round_robin_sorting_modifier")
        module("utility", "random_sorting_modifier")
        module("utility", "redstone_module")
        module("utility", "stack_size_module")
        module("utility", "low_high_priority_module")
        module("utility", "medium_high_priority_module")
        module("utility", "high_high_priority_module")
        module("utility", "low_low_priority_module")
        module("utility", "medium_low_priority_module")
        module("utility", "high_low_priority_module")

        let tiers = ["low", "medium", "high"]
        for (let i = 0; i < tiers.length; i++) {
            let tier = "tier_" + (i + 1)
            let prefix = tiers[i] + "_"
            module(tier, prefix + "extraction_module")
            module(tier, prefix + "retrieval_module")
            module(tier, prefix + "speed_module")
            module(tier, prefix + "filter_module")
            module(tier, prefix + "crafting_module")
        }

        let attachment_base = (id, amount, other_ingredient) => {
            event.remove({ output: id })
            if (other_ingredient) {
                event.smithing(Item.of(id, amount), "kubejs:attachment_base", other_ingredient)
                event.recipes.create.mechanical_crafting(Item.of(id, amount), "AB", { A: "kubejs:attachment_base", B: other_ingredient })
            }
            else
                event.stonecutting(Item.of(id, amount), "kubejs:attachment_base")
        }
        attachment_base("thermal:turbo_servo_attachment", 1)
        attachment_base("thermal:filter_attachment", 1)
        attachment_base("thermal:energy_limiter_attachment", 1)
    })
}
