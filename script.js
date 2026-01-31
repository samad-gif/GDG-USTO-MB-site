// ========== DONNÉES DU QUIZ ==========
const quizData = {
    "frontend": {
        title: "Développement Web Front-End",
        icon: "fas fa-code",
        questions: [
            {
                question: "Quel langage est principalement utilisé pour structurer une page web ?",
                options: ["CSS", "JavaScript", "HTML", "Python"],
                correct: 2,
                explanation: "HTML (HyperText Markup Language) est le langage de base pour structurer le contenu web."
            },
            {
                question: "Quelle propriété CSS permet de modifier la couleur du texte ?",
                options: ["text-color", "font-color", "color", "text-style"],
                correct: 2,
                explanation: "La propriété 'color' en CSS est utilisée pour définir la couleur du texte."
            },
            {
                question: "Quel framework JavaScript est développé par Facebook ?",
                options: ["Angular", "Vue.js", "React", "jQuery"],
                correct: 2,
                explanation: "React a été créé par Facebook et est largement utilisé pour les interfaces utilisateur."
            },
            {
                question: "Quelle méthode JavaScript permet de sélectionner un élément par son ID ?",
                options: ["querySelector()", "getElementById()", "getElementsByClassName()", "selectById()"],
                correct: 1,
                explanation: "getElementById() est la méthode native JavaScript pour sélectionner un élément par son ID."
            },
            {
                question: "Quelle unité CSS est relative à la taille de la police de l'élément parent ?",
                options: ["px", "rem", "em", "vw"],
                correct: 2,
                explanation: "L'unité 'em' est relative à la taille de police de l'élément parent."
            }
        ]
    },
    "backend": {
        title: "Développement Back-End",
        icon: "fas fa-server",
        questions: [
            {
                question: "Quel langage est souvent utilisé avec le framework Django ?",
                options: ["Java", "Python", "Ruby", "PHP"],
                correct: 1,
                explanation: "Django est un framework web Python de haut niveau."
            },
            {
                question: "Qu'est-ce qu'une API RESTful ?",
                options: [
                    "Une interface pour bases de données",
                    "Une architecture utilisant des requêtes HTTP",
                    "Un langage de programmation",
                    "Un type de serveur"
                ],
                correct: 1,
                explanation: "RESTful API utilise les méthodes HTTP (GET, POST, PUT, DELETE) pour les opérations CRUD."
            },
            {
                question: "Quel système de gestion de base de données est populaire pour les applications web ?",
                options: ["MongoDB", "MySQL", "SQLite", "PostgreSQL"],
                correct: 1,
                explanation: "MySQL est l'un des SGBD relationnels les plus populaires pour les applications web."
            },
            {
                question: "Quel framework PHP est le plus utilisé ?",
                options: ["Symfony", "CodeIgniter", "Laravel", "CakePHP"],
                correct: 2,
                explanation: "Laravel est actuellement le framework PHP le plus populaire."
            },
            {
                question: "Quel protocole est utilisé pour sécuriser les connexions HTTP ?",
                options: ["FTP", "HTTP/2", "HTTPS", "SSL/TLS"],
                correct: 2,
                explanation: "HTTPS (HTTP Secure) utilise SSL/TLS pour chiffrer la communication."
            }
        ]
    },
    "cybersecurity": {
        title: "Cybersécurité",
        icon: "fas fa-shield-alt",
        questions: [
            {
                question: "Qu'est-ce qu'une attaque par phishing ?",
                options: [
                    "Attaque par déni de service",
                    "Usurpation d'identité par email",
                    "Injection SQL",
                    "Vol de mot de passe Wi-Fi"
                ],
                correct: 1,
                explanation: "Le phishing utilise des emails frauduleux pour tromper les utilisateurs."
            },
            {
                question: "Quel type de malware se réplique automatiquement ?",
                options: ["Trojan", "Virus", "Ransomware", "Spyware"],
                correct: 1,
                explanation: "Un virus est un malware qui peut se répliquer et se propager."
            },
            {
                question: "Que signifie le chiffrement de bout en bout ?",
                options: [
                    "Chiffrement uniquement sur le serveur",
                    "Chiffrement uniquement pendant le transit",
                    "Chiffrement sur l'appareil de l'expéditeur et déchiffrement seulement chez le destinataire",
                    "Chiffrement avec une clé publique"
                ],
                correct: 2,
                explanation: "Seuls l'expéditeur et le destinataire peuvent lire les messages."
            },
            {
                question: "Qu'est-ce qu'un pare-feu (firewall) ?",
                options: [
                    "Un antivirus",
                    "Un système de détection d'intrusion",
                    "Un système qui contrôle le trafic réseau",
                    "Un outil de chiffrement"
                ],
                correct: 2,
                explanation: "Un pare-feu surveille et contrôle le trafic réseau selon des règles de sécurité."
            },
            {
                question: "Que signifie l'authentification à deux facteurs (2FA) ?",
                options: [
                    "Deux mots de passe différents",
                    "Un mot de passe et une question secrète",
                    "Deux formes différentes d'authentification",
                    "Authentification sur deux appareils"
                ],
                correct: 2,
                explanation: "La 2FA combine deux méthodes différentes pour vérifier l'identité."
            }
        ]
    },
    "ai": {
        title: "IA et Data Science",
        icon: "fas fa-brain",
        questions: [
            {
                question: "Quelle bibliothèque Python est la plus utilisée pour le machine learning ?",
                options: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow"],
                correct: 2,
                explanation: "Scikit-learn est la bibliothèque Python la plus populaire pour le machine learning."
            },
            {
                question: "Qu'est-ce qu'un réseau de neurones ?",
                options: [
                    "Un algorithme de tri",
                    "Un système inspiré du cerveau humain",
                    "Un type de base de données",
                    "Un langage de programmation"
                ],
                correct: 1,
                explanation: "Les réseaux de neurones sont inspirés du fonctionnement du cerveau humain."
            },
            {
                question: "Quelle technique est utilisée pour entraîner les modèles de deep learning ?",
                options: ["Rétropropagation", "Tri rapide", "Récursivité", "Hachage"],
                correct: 0,
                explanation: "La rétropropagation est l'algorithme clé pour entraîner les réseaux de neurones."
            },
            {
                question: "Qu'est-ce que le NLP (Natural Language Processing) ?",
                options: [
                    "Traitement des images",
                    "Traitement du langage naturel",
                    "Programmation réseau",
                    "Analyse de données"
                ],
                correct: 1,
                explanation: "Le NLP traite de l'interaction entre ordinateurs et langage humain."
            },
            {
                question: "Quel type d'apprentissage utilise des données étiquetées ?",
                options: ["Non supervisé", "Supervisé", "Par renforcement", "Semi-supervisé"],
                correct: 1,
                explanation: "L'apprentissage supervisé utilise des données étiquetées."
            }
        ]
    },
    "mobile": {
        title: "Développement Mobile",
        icon: "fas fa-mobile-alt",
        questions: [
            {
                question: "Quel langage est principalement utilisé pour le développement iOS natif ?",
                options: ["Java", "Kotlin", "Swift", "Dart"],
                correct: 2,
                explanation: "Swift est le langage principal recommandé par Apple pour iOS."
            },
            {
                question: "Quel framework permet de créer des applications multiplateformes avec JavaScript ?",
                options: ["React Native", "Flutter", "Xamarin", "Ionic"],
                correct: 0,
                explanation: "React Native permet de développer des applications iOS et Android avec JavaScript."
            },
            {
                question: "Quel langage est utilisé par Flutter ?",
                options: ["JavaScript", "Dart", "TypeScript", "Python"],
                correct: 1,
                explanation: "Flutter utilise le langage Dart, développé par Google."
            },
            {
                question: "Qu'est-ce qu'un APK ?",
                options: [
                    "Un langage de programmation Android",
                    "Le fichier d'installation des applications Android",
                    "Un framework iOS",
                    "Un type de base de données mobile"
                ],
                correct: 1,
                explanation: "APK est le format de fichier pour distribuer des applications Android."
            },
            {
                question: "Quel IDE est principalement utilisé pour Android ?",
                options: ["Xcode", "Visual Studio", "Android Studio", "Eclipse"],
                correct: 2,
                explanation: "Android Studio est l'IDE officiel pour le développement Android."
            }
        ]
    }
};

// ========== VARIABLES GLOBALES ==========
let currentBranch = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;

// ========== ÉLÉMENTS DOM ==========
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const logo = document.querySelector('.logo');

const branchesGrid = document.getElementById('branchesGrid');
const quizContainer = document.getElementById('quizContainer');
const resultsContainer = document.getElementById('resultsContainer');
const branchTitle = document.getElementById('branchTitle');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const feedback = document.getElementById('feedback');
const progressBar = document.getElementById('progressBar');
const questionCount = document.getElementById('questionCount');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const restartBtn = document.getElementById('restartBtn');
const correctCount = document.getElementById('correctCount');
const wrongCount = document.getElementById('wrongCount');
const scoreMessage = document.getElementById('scoreMessage');
const scoreText = document.querySelector('.score-text');
const progressCircle = document.querySelector('.progress-circle');

// ========== NAVIGATION ==========
// Navigation entre pages
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        
        // Mettre à jour le menu actif
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Afficher la page correspondante
        pages.forEach(page => {
            page.classList.remove('active');
            if (page.id === targetId) {
                page.classList.add('active');
            }
        });
        
        // Fermer le menu mobile
        navMenu.classList.remove('active');
        
        // Si on revient à Home, réinitialiser
        if (targetId === 'home') {
            resetQuiz();
        }
    });
});

// Logo clique vers Home
logo.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    document.querySelector('.nav-link[href="#home"]').classList.add('active');
    
    pages.forEach(page => {
        page.classList.remove('active');
        if (page.id === 'home') {
            page.classList.add('active');
        }
    });
    
    navMenu.classList.remove('active');
    resetQuiz();
});

// Menu mobile
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Fermer menu mobile en cliquant à l'extérieur
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
        navMenu.classList.remove('active');
    }
});

// ========== INITIALISATION DU QUIZ ==========
function initQuiz() {
    // Créer les cartes des branches
    for (const branchKey in quizData) {
        const branch = quizData[branchKey];
        const card = document.createElement('div');
        card.className = 'branch-card';
        card.innerHTML = `
            <div class="branch-icon">
                <i class="${branch.icon}"></i>
            </div>
            <h3>${branch.title}</h3>
        `;
        card.addEventListener('click', () => startQuiz(branchKey));
        branchesGrid.appendChild(card);
    }
    
    // Événements des boutons
    prevBtn.addEventListener('click', showPreviousQuestion);
    nextBtn.addEventListener('click', showNextQuestion);
    submitBtn.addEventListener('click', showResults);
    restartBtn.addEventListener('click', () => {
        resetQuiz();
        showHome();
    });
}

// ========== FONCTIONS DU QUIZ ==========
function startQuiz(branchKey) {
    currentBranch = branchKey;
    currentQuestionIndex = 0;
    userAnswers = new Array(quizData[branchKey].questions.length).fill(null);
    
    // Cacher la sélection, montrer le quiz
    document.querySelector('.branches-section').classList.add('hidden');
    quizContainer.classList.remove('hidden');
    
    // Mettre à jour le titre
    branchTitle.textContent = quizData[branchKey].title;
    
    // Montrer la première question
    showQuestion();
}

function showQuestion() {
    const questions = quizData[currentBranch].questions;
    const question = questions[currentQuestionIndex];
    
    // Mettre à jour le compteur
    questionCount.textContent = `Question ${currentQuestionIndex + 1}/${questions.length}`;
    
    // Mettre à jour la barre de progression
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    
    // Mettre à jour la question
    questionText.textContent = question.question;
    
    // Vider les options
    optionsContainer.innerHTML = '';
    
    // Ajouter les options
    const labels = ['A', 'B', 'C', 'D'];
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        
        // Si déjà répondu
        if (userAnswers[currentQuestionIndex] === index) {
            optionElement.classList.add('selected');
            
            // Afficher correction si déjà vérifié
            if (userAnswers[currentQuestionIndex] !== null) {
                if (index === question.correct) {
                    optionElement.classList.add('correct');
                } else {
                    optionElement.classList.add('wrong');
                }
            }
        }
        
        optionElement.innerHTML = `
            <div class="option-letter">${labels[index]}</div>
            <span>${option}</span>
        `;
        
        optionElement.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionElement);
    });
    
    // Masquer le feedback
    feedback.classList.add('hidden');
    
    // Gérer les boutons de navigation
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.classList.toggle('hidden', currentQuestionIndex === questions.length - 1);
    submitBtn.classList.toggle('hidden', currentQuestionIndex !== questions.length - 1);
}

function selectOption(optionIndex) {
    // Ne pas changer si déjà vérifié
    if (userAnswers[currentQuestionIndex] !== null && 
        (feedback.classList.contains('correct') || feedback.classList.contains('wrong'))) {
        return;
    }
    
    // Enregistrer la réponse
    userAnswers[currentQuestionIndex] = optionIndex;
    
    const question = quizData[currentBranch].questions[currentQuestionIndex];
    const optionElements = document.querySelectorAll('.option');
    
    // Mettre à jour l'affichage
    optionElements.forEach((el, index) => {
        el.classList.remove('selected');
        if (index === optionIndex) {
            el.classList.add('selected');
        }
    });
    
    // Vérifier et afficher feedback
    const isCorrect = optionIndex === question.correct;
    
    feedback.className = `feedback ${isCorrect ? 'correct' : 'wrong'}`;
    feedback.innerHTML = `
        <i class="fas fa-${isCorrect ? 'check-circle' : 'times-circle'}"></i>
        <div>
            <strong>${isCorrect ? 'Correct !' : 'Incorrect !'}</strong>
            <p>${question.explanation}</p>
        </div>
    `;
    feedback.classList.remove('hidden');
    
    // Appliquer les couleurs de correction
    optionElements.forEach((el, index) => {
        el.classList.remove('correct', 'wrong');
        if (index === question.correct) {
            el.classList.add('correct');
        } else if (index === optionIndex && !isCorrect) {
            el.classList.add('wrong');
        }
    });
}

function showPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

function showNextQuestion() {
    const questions = quizData[currentBranch].questions;
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    }
}

function showResults() {
    // Calculer le score
    const questions = quizData[currentBranch].questions;
    score = 0;
    
    questions.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            score++;
        }
    });
    
    const percentage = (score / questions.length) * 100;
    
    // Mettre à jour l'affichage
    correctCount.textContent = score;
    wrongCount.textContent = questions.length - score;
    
    // Message selon le score
    let message = '';
    let color = '';
    
    if (percentage >= 80) {
        message = "Excellent ! 🎉";
        color = "#10b981";
    } else if (percentage >= 60) {
        message = "Bon score ! 👍";
        color = "#3b82f6";
    } else if (percentage >= 40) {
        message = "Pas mal ! 📚";
        color = "#f59e0b";
    } else {
        message = "À améliorer ! 💪";
        color = "#ef4444";
    }
    
    scoreMessage.textContent = message;
    scoreMessage.style.color = color;
    
    // Animation du cercle de score
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
    
    progressCircle.style.strokeDasharray = circumference;
    progressCircle.style.strokeDashoffset = circumference;
    
    // Animer après un délai
    setTimeout(() => {
        progressCircle.style.strokeDashoffset = offset;
        scoreText.textContent = `${Math.round(percentage)}%`;
    }, 100);
    
    // Afficher les résultats
    quizContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
}

function resetQuiz() {
    currentBranch = null;
    currentQuestionIndex = 0;
    userAnswers = [];
    score = 0;
    
    // Réinitialiser l'affichage
    quizContainer.classList.add('hidden');
    resultsContainer.classList.add('hidden');
    document.querySelector('.branches-section').classList.remove('hidden');
    
    // Réinitialiser le cercle de score
    progressCircle.style.strokeDashoffset = 440;
    scoreText.textContent = '0%';
}

function showHome() {
    navLinks.forEach(l => l.classList.remove('active'));
    document.querySelector('.nav-link[href="#home"]').classList.add('active');
    
    pages.forEach(page => {
        page.classList.remove('active');
        if (page.id === 'home') {
            page.classList.add('active');
        }
    });
}

// ========== FORMULAIRE DE CONTACT ==========
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulation d'envoi
        alert('Merci pour votre message ! Nous vous répondrons bientôt.');
        contactForm.reset();
    });
}

// ========== INITIALISATION AU CHARGEMENT ==========
document.addEventListener('DOMContentLoaded', () => {
    initQuiz();
    
    // S'assurer que Home est active au départ
    showHome();
});