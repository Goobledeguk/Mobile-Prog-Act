
class Dungeon {
  constructor() {
    const dungeonName = "Isle of Samar";
    const floorDifficulty = "Level 5 - Malajog Pit";
    const seedCode = "SEED-8849-2131";
    const partyMembers = ["Eren Yeager", "Naruto Uzumaki", "Sukuna", "Rudeus"];
    const lootTable = ["Rusting Dagger", "Leather Scraps", "Health Potion"];
    const trapTypes = ["Spike Pit", "Poison Dart", "Lava Trap"];
    const bossConfig = { name: "Bai", health: 2500, loot: { rarity: "Legendary" } };
    const maxInventorySlots = 20;
    const dungeonTheme = "Summer Festival";
    const merchantConfig = { npc: "Wandering Merchant", itemsForSale: 5 };


    let currentRoomNumber = 7;
    let partyCurrentHp = 340;
    let partyMana = 150;
    let goldCollected = 1250;
    let torchBurnTime = 45.5;
    let isBossEncounterActive = false;
    let turnsElapsed = 42;
    let activeBuff = null;
    let currentRoomLightLevel = 15;
    let lastTrapEncountered = "Spike Pit";

    // Expose necessary data to class instance properties
    this.dungeonName = dungeonName;
    this.floorDifficulty = floorDifficulty;
    this.partyMembers = partyMembers;
    this.lootTable = lootTable;
    this.trapTypes = trapTypes;
    this.bossConfig = bossConfig;
    this.merchantConfig = merchantConfig;

    this.currentRoomNumber = currentRoomNumber;
    this.partyCurrentHp = partyCurrentHp;
    this.partyMana = partyMana;
    this.goldCollected = goldCollected;
    this.torchBurnTime = torchBurnTime;
    this.isBossEncounterActive = isBossEncounterActive;
    this.turnsElapsed = turnsElapsed;
    this.activeBuff = activeBuff;
    this.currentRoomLightLevel = currentRoomLightLevel;
    this.lastTrapEncountered = lastTrapEncountered;
  }

  calculateDamage = (baseAtk, multiplier) => baseAtk * multiplier;
  formatCombatLog = (hero, action) => `[Combat] ${hero} used ${action}!`;
  filterHeavyArmored = (party) => party.filter(hero => hero.includes("Eren Yeager") || hero.includes("Naruto Uzumaki"));
  mapLootRarity = (items) => items.map(item => `Rare Drop: ${item}`);
  evaluateDanger = (light) => light < 20 ? "High Ambush Risk" : "Safe Visibility";

  generateDungeonLogs() {
    const log1 = `Entering dungeon: ${this.dungeonName} under ${this.floorDifficulty} conditions.`;
    const log2 = `Current room depth tracker: Room ${this.currentRoomNumber}.`;
    const log3 = `Party aggregate health pool is at ${this.partyCurrentHp} HP.`;
    const log4 = `Available magical mana pool: ${this.partyMana} MP.`;
    const log5 = `Accumulated dungeon treasury gold: ${this.goldCollected} pieces.`;
    const log6 = `Remaining torch burn duration: ${this.torchBurnTime} minutes.`;
    const log7 = `Boss arena encounter status: ${this.isBossEncounterActive}.`;
    const log8 = `Total tactical turns elapsed in run: ${this.turnsElapsed}.`;
    const log9 = `Room illumination index reads ${this.currentRoomLightLevel} lumens.`;
    const log10 = `Active status effect or blessing: ${this.activeBuff ?? "No Active Buffs"}.`;

    return [log1, log2, log3, log4, log5, log6, log7, log8, log9, log10];
  }

  runDungeonStep() {
    
    const [tank, striker, caster] = this.partyMembers;
    const [starterItem, secondaryItem] = this.lootTable;
    const [firstTrap] = this.trapTypes;

    const { name: bossName, health: bossHp } = this.bossConfig;
    const { npc: merchantName, itemsForSale } = this.merchantConfig;
    const { rarity: dropRarity } = this.bossConfig.loot;

    const expandedParty = [...this.partyMembers, "Rene the Great"];
    const expandedLoot = [...this.lootTable, "Ring of Vitality"];

    const buffedBossConfig = { ...this.bossConfig, enraged: true };
    const expandedMerchant = { ...this.merchantConfig, discountActive: false };

    const uppercaseParty = this.partyMembers.map(hero => hero.toUpperCase());
    const adjustedGoldGains = [100, 250, 500].map(coins => coins * 1.5);
  
    const longNameHeroes = this.partyMembers.filter(hero => hero.length > 13);
    const valuableLoot = [15, 250, 80, 1200].filter(val => val > 100);

    const bossDiagnostic = {
      primaryBoss: this.bossConfig?.name,
      bossLootRarity: this.bossConfig?.loot?.rarity
    };

    const secretChamberDiagnostic = {
      secretRoom: this.bossConfig?.secretChamber?.roomCode,
      trapWarning: this.trapTypes?.[0] ?? "Clear Path"
    };

    return {
      expandedParty,
      expandedLoot,
      buffedBossConfig,
      bossDiagnostic,
      seedCode,
      dungeonTheme: this.dungeonTheme,
    };
  }


  formatCombatLog(hero, action) {
    return `[Combat] ${hero} used ${action}!`;
  }



}

const game = new Dungeon();
console.log(game.generateDungeonLogs()[2]);
console.log("Dungeon Evaluation:", game.runDungeonStep());
console.log("Danger Assessment:", game.formatCombatLog(game.partyMembers[2], "Fireball"));
console.log("Damage Calculation:", game.calculateDamage(120, 1.5));
