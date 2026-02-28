# Meet Our Team

Our dedicated team brings together expertise in materials science, engineering, and innovation to deliver cutting-edge protection solutions.

<div class="team-grid">

<div class="team-card">
  <div class="team-photo">
    <img src="/assets/team/Bernard_C12_0740_head.jpg" alt="Bernard" />
  </div>
  <div class="team-info">
    <h3>Bernard</h3>
    <p class="team-role">Co-Founder & CEO</p>
    <p class="team-description">Leading MetaSafe's vision of bringing metamaterials out of the lab and into the real world.</p>
    <div class="team-social">
      <a href="https://www.linkedin.com/in/ennisbl/" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
      <a href="mailto:bernard.ennis@metamaterialworks.com" aria-label="Email"><i class="fas fa-envelope"></i></a>
    </div>
  </div>
</div>

<div class="team-card">
  <div class="team-photo">
    <img src="/assets/team/Corentin_C12_0783_profile.jpg" alt="Corentin" />
  </div>
  <div class="team-info">
    <h3>Corentin</h3>
    <p class="team-role">Co-Founder & CSO</p>
    <p class="team-description">Leading scientific research and development initiatives in dissipative mechanical metamaterials.</p>
    <div class="team-social">
      <a href="https://www.linkedin.com/in/corentin-coulais-187b02254/" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
      <a href="https://coulaislab.com/" aria-label="Website"><i class="fas fa-globe"></i></a>
      <a href="mailto:coulais@uva.nl" aria-label="Email"><i class="fas fa-envelope"></i></a>
    </div>
  </div>
</div>

<div class="team-card">
  <div class="team-photo">
    <img src="/assets/team/Spyros_head.jpg" alt="Spyros" />
  </div>
  <div class="team-info">
    <h3>Spyros</h3>
    <p class="team-role">Mechanical Engineer</p>
    <p class="team-description">Turning metamaterials science into mechanical systems.</p>
    <div class="team-social">
      <a href="https://www.linkedin.com/in/spyridon-fyllaridis/" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
      <a href="mailto:s.fyllaridis@uva.nl" aria-label="Email"><i class="fas fa-envelope"></i></a>
    </div>
  </div>
</div>

</div>

<style scoped>
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.team-card {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid var(--vp-c-divider);
}

.team-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.team-photo {
  margin-bottom: 1rem;
}

.team-photo img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--vp-c-brand);
}

.team-info h3 {
  margin: 0.5rem 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.team-role {
  color: var(--vp-c-brand);
  font-weight: 500;
  margin: 0.5rem 0;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.team-description {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 1rem 0;
}

.team-social {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.team-social a {
  color: var(--vp-c-text-3);
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.team-social a:hover {
  color: var(--vp-c-brand);
}

@media (max-width: 768px) {
  .team-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .team-card {
    padding: 1rem;
  }
}
</style>
