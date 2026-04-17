/**
 * Main Application
 * Renders all sections from loaded data
 */

class PortfolioApp {
    constructor() {
        this.data = null;
    }

    /**
     * Safely escape HTML to prevent XSS attacks
     * @param {string} str - String to escape
     * @returns {string} Escaped safe string
     */
    escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    async init() {
        try {
            this.data = await window.dataLoader.loadAll();
            this.renderAll();
            console.log('✅ Portfolio loaded successfully');
        } catch (error) {
            console.error('❌ Portfolio failed to load:', error);
            this.showError();
        }
    }

    renderAll() {
        this.renderNavigation();
        this.renderProfile();
        this.renderSkills();
        this.renderExperience();
        this.renderProjects();
        this.renderLinks();
        this.renderFooter();
    }

    renderNavigation() {
        document.getElementById('nav-brand').textContent = this.data.profile.name;
        
        const navLinks = document.getElementById('nav-links');
        // Name -> href id mapping (matches actual HTML section ids
        const sections = [
            { name: 'About', id: 'hero' },
            { name: 'Skills', id: 'skills' },
            { name: 'Experience', id: 'experience' },
            { name: 'Projects', id: 'projects' },
            { name: 'Connect', id: 'links' }
        ];
        
        navLinks.innerHTML = sections.map(section => {
            return `<li><a href="#${this.escapeHtml(section.id)}">${this.escapeHtml(section.name)}</a></li>`;
        }).join('');
    }

    renderProfile() {
        const { name, title, bio, location, avatar } = this.data.profile;
        
        document.getElementById('hero-content').innerHTML = `
            <img class="hero-avatar" alt="${this.escapeHtml(name)} profile picture" src="${this.escapeHtml(avatar || '')}">
            <h1 class="hero-name">${this.escapeHtml(name)}</h1>
            <p class="hero-title">${this.escapeHtml(title)}</p>
            <p class="hero-bio">${this.escapeHtml(bio)}</p>
            <p class="hero-location">📍 ${this.escapeHtml(location)}</p>
        `;
    }

    renderSkills() {
        const container = document.getElementById('skills-content');
        
        container.innerHTML = `
            <div class="skills-grid">
                ${this.data.skills.categories.map(category => `
                    <div class="skill-category">
                        <h3>${this.escapeHtml(category.name)}</h3>
                        <div class="skill-items">
                            ${category.items.map(skill => `<span class="skill-tag">${this.escapeHtml(skill)}</span>`).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    renderExperience() {
        const container = document.getElementById('experience-content');
        
        container.innerHTML = `
            <div class="timeline">
                ${this.data.experience.entries.map(entry => `
                    <div class="timeline-entry">
                        <div class="timeline-header">
                            <div class="timeline-company">${this.escapeHtml(entry.company)}</div>
                            <div class="timeline-role">${this.escapeHtml(entry.role)}</div>
                        </div>
                        <div class="timeline-date">${this.escapeHtml(entry.startDate)} - ${this.escapeHtml(entry.endDate)}</div>
                        <p class="timeline-description">${this.escapeHtml(entry.description)}</p>
                        <ul class="timeline-highlights">
                            ${entry.highlights.map(h => `<li>${this.escapeHtml(h)}</li>`).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
        `;
    }

    renderProjects() {
        const container = document.getElementById('projects-content');
        
        container.innerHTML = `
            <div class="projects-grid">
                ${this.data.projects.projects.map(project => `
                    <div class="project-card">
                        <div class="project-content">
                            <h3 class="project-title">${this.escapeHtml(project.title)}</h3>
                            <p class="project-description">${this.escapeHtml(project.description)}</p>
                            <div class="project-tech">
                                ${project.technologies.map(tech => `<span class="project-tech-tag">${this.escapeHtml(tech)}</span>`).join('')}
                            </div>
                            <div class="project-links">
                                ${project.githubUrl ? `<a href="${this.escapeHtml(project.githubUrl)}" target="_blank" rel="noopener">GitHub</a>` : ''}
                                ${project.liveUrl ? `<a href="${this.escapeHtml(project.liveUrl)}" target="_blank" rel="noopener">Live Demo</a>` : ''}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    renderLinks() {
        const container = document.getElementById('links-content');
        
        container.innerHTML = `
            <div class="links-grid">
                ${this.data.links.links.map(link => `
                    <a href="${this.escapeHtml(link.url)}" target="_blank" rel="noopener" class="link-card">
                        <div class="link-name">${this.escapeHtml(link.name)}</div>
                    </a>
                `).join('')}
            </div>
        `;
    }

    renderFooter() {
        document.getElementById('footer').innerHTML = `
            <p>&copy; ${new Date().getFullYear()} ${this.data.profile.name}. All rights reserved.</p>
        `;
    }

    showError() {
        document.querySelectorAll('.loading').forEach(el => {
            el.textContent = 'Failed to load data. Check console for details.';
        });
    }
}

// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp().init();
});
