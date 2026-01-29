// ========================================
// Kundra Static Site JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', function() {
  initChatAnimation();
  initStatsAnimation();
  initPhoneMockup();
  initWaveform();
  initSmoothScroll();
});

// ========================================
// Chat Conversations Animation
// ========================================

const conversations = [
  // Conversation 1: Restaurant booking
  [
    { type: 'user', text: 'Hej! Jag vill boka ett bord för två.' },
    { type: 'ai', text: 'Hej! Självklart. Vilket datum och tid passar er?' },
    { type: 'user', text: 'Lördag kväll, runt 19:00' },
    { type: 'ai', text: 'Perfekt! Jag har ett bord för 2 pers kl 19:00. Vill du bekräfta?' },
    { type: 'user', text: 'Ja, boka det tack!' },
    { type: 'ai', text: 'Klart! Bekräftelse skickas till din e-post. Välkommen! 🍽️' },
  ],
  // Conversation 2: Invoice questions
  [
    { type: 'user', text: 'Hej, jag har en fråga om min faktura.' },
    { type: 'ai', text: 'Hej! Självklart, vad undrar du över?' },
    { type: 'user', text: 'Jag förstår inte en post på 299 kr' },
    { type: 'ai', text: 'Det är månadsavgiften för Premium-paketet som startade 1 mars.' },
    { type: 'user', text: 'Ah, tack! Kan jag få en kopia på fakturan?' },
    { type: 'ai', text: 'Absolut! Jag skickar en kopia till din e-post nu. ✉️' },
  ],
  // Conversation 3: Accounting system
  [
    { type: 'user', text: 'Hur exporterar jag data från bokföringssystemet?' },
    { type: 'ai', text: 'Du hittar export under Inställningar > Rapporter.' },
    { type: 'user', text: 'Vilka format stöds?' },
    { type: 'ai', text: 'Vi stödjer Excel, CSV och PDF för alla rapporter.' },
    { type: 'user', text: 'Perfekt, kan jag schemalägga automatisk export?' },
    { type: 'ai', text: 'Ja! Gå till Automatisering och välj frekvens. 📊' },
  ],
];

let currentConversationIndex = 0;
let currentMessageIndex = 0;
let chatMessagesContainer;
let typingIndicator;

function initChatAnimation() {
  chatMessagesContainer = document.getElementById('chatMessages');
  typingIndicator = document.getElementById('typingIndicator');
  
  if (!chatMessagesContainer) return;
  
  showNextMessage();
}

function showNextMessage() {
  const conversation = conversations[currentConversationIndex];
  
  if (currentMessageIndex >= conversation.length) {
    // Wait and then start next conversation
    setTimeout(() => {
      chatMessagesContainer.innerHTML = '';
      currentMessageIndex = 0;
      currentConversationIndex = (currentConversationIndex + 1) % conversations.length;
      showNextMessage();
    }, 4000);
    return;
  }
  
  const message = conversation[currentMessageIndex];
  
  if (message.type === 'ai') {
    // Show typing indicator for AI messages
    typingIndicator.classList.add('visible');
    setTimeout(() => {
      typingIndicator.classList.remove('visible');
      addMessage(message);
      currentMessageIndex++;
      setTimeout(showNextMessage, 1200);
    }, 1500);
  } else {
    // User messages appear directly
    setTimeout(() => {
      addMessage(message);
      currentMessageIndex++;
      setTimeout(showNextMessage, 1200);
    }, 1200);
  }
}

function addMessage(message) {
  const messageEl = document.createElement('div');
  messageEl.className = `message ${message.type}`;
  messageEl.textContent = message.text;
  chatMessagesContainer.appendChild(messageEl);
  
  // Trigger animation
  setTimeout(() => {
    messageEl.classList.add('visible');
  }, 50);
  
  // Scroll to bottom
  chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
}

// ========================================
// Stats Counter Animation
// ========================================

function initStatsAnimation() {
  const statValues = document.querySelectorAll('.stat-value');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  statValues.forEach(stat => observer.observe(stat));
}

function animateCounter(element) {
  const target = parseInt(element.dataset.target);
  const suffix = element.dataset.suffix || '';
  const duration = 3500;
  const startTime = Date.now();
  
  function update() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const current = Math.round(target * easeOutQuart);
    
    element.textContent = current + suffix;
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}

// ========================================
// Phone Mockup Toggle
// ========================================

let phoneViewTimeout;

function initPhoneMockup() {
  const micButton = document.getElementById('micButton');
  const backButton = document.getElementById('backButton');
  const voiceView = document.getElementById('voiceView');
  const dashboardView = document.getElementById('dashboardView');
  
  if (!micButton || !voiceView || !dashboardView) return;
  
  // Auto-toggle views
  function startAutoToggle() {
    phoneViewTimeout = setInterval(() => {
      togglePhoneView();
    }, 5000);
  }
  
  function togglePhoneView() {
    const isVoiceActive = voiceView.classList.contains('active');
    
    if (isVoiceActive) {
      voiceView.classList.remove('active');
      dashboardView.classList.add('active');
    } else {
      dashboardView.classList.remove('active');
      voiceView.classList.add('active');
    }
  }
  
  // Click handlers
  micButton.addEventListener('click', () => {
    clearInterval(phoneViewTimeout);
    voiceView.classList.remove('active');
    dashboardView.classList.add('active');
    startAutoToggle();
  });
  
  backButton.addEventListener('click', () => {
    clearInterval(phoneViewTimeout);
    dashboardView.classList.remove('active');
    voiceView.classList.add('active');
    startAutoToggle();
  });
  
  startAutoToggle();
}

// ========================================
// Waveform Animation
// ========================================

function initWaveform() {
  const waveformContainer = document.getElementById('waveform');
  if (!waveformContainer) return;
  
  // Create wave bars
  for (let i = 0; i < 12; i++) {
    const bar = document.createElement('div');
    bar.className = 'wave-bar';
    bar.style.setProperty('--wave-height', `${24 + Math.random() * 20}px`);
    bar.style.animationDelay = `${i * 0.1}s`;
    bar.style.animationDuration = `${0.8 + Math.random() * 0.4}s`;
    waveformContainer.appendChild(bar);
  }
}

// ========================================
// Smooth Scroll
// ========================================

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}
