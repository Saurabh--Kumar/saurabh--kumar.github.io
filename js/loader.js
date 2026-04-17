/**
 * Data Loader Module
 * Handles loading JSON data files with error handling and caching
 */

class DataLoader {
    constructor() {
        this.cache = new Map();
    }

    /**
     * Load JSON data file from path
     * @param {string} path - Path to JSON file
     * @returns {Promise<any>} Parsed JSON data
     */
    async load(path) {
        if (this.cache.has(path)) {
            return this.cache.get(path);
        }

        try {
            const response = await fetch(path);
            
            if (!response.ok) {
                throw new Error(`Failed to load ${path}: ${response.status}`);
            }

            const data = await response.json();
            this.cache.set(path, data);
            
            console.log(`✅ Loaded: ${path}`);
            return data;
        } catch (error) {
            console.error(`❌ Error loading ${path}:`, error);
            throw error;
        }
    }

    /**
     * Load all data files in parallel
     * @returns {Promise<Object>} All data objects
     */
    async loadAll() {
        const [profile, skills, experience, projects, links] = await Promise.all([
            this.load('./data/profile.json'),
            this.load('./data/skills.json'),
            this.load('./data/experience.json'),
            this.load('./data/projects.json'),
            this.load('./data/links.json')
        ]);

        return {
            profile,
            skills,
            experience,
            projects,
            links
        };
    }

    /**
     * Clear cache for manual refresh
     */
    clearCache() {
        this.cache.clear();
    }
}

// Export singleton instance
window.dataLoader = new DataLoader();
