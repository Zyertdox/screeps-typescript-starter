export class Spawner {
    static maxHarvester: number = 1;

    public static spawn() {
        var spawn = Game.spawns['Spawn1'];
        if (!spawn.spawning && _.size(Game.creeps) < this.maxHarvester) {
            spawn.spawnCreep([WORK, MOVE, CARRY], "harvester",
                {
                    memory:
                    {
                        role: 'harvester',
                        room: '',
                        working: false
                    }
                });
        }
    }
}
