var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const CharacterSchema = new Schema ({
    name: String,
    imageUrl: String,

    race: {
        type: String,
        enum: ['Elf', 'Dwarf', 'Human']
    },
    class :{
        type: String,
        enum: ['Warrior', 'Mystic', 'Rogue']
    },
    level: {
        type: Number,
        defual: 1
    },

    STR: Number,
    DEX: Number,
    CON: Number,
    INT: Number,
    WIS: Number,
    CHA: Number,

    equipment: [
        {
            type: Schema.Types.ObjectId,
            ref: "Equipment"
        }
    ]
});

const Character = mongoose.model("Character", CharacterSchema)

module.exports = Character;