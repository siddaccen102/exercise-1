from django.test import TestCase
from .models import User, Team, Activity, Leaderboard, Workout

class ModelTests(TestCase):
    def test_create_user(self):
        user = User.objects.create_user(username='testuser', email='test@example.com')
        self.assertEqual(user.email, 'test@example.com')

    def test_create_team(self):
        team = Team.objects.create(name='Test Team')
        self.assertEqual(team.name, 'Test Team')

    def test_create_activity(self):
        user = User.objects.create_user(username='testuser2', email='test2@example.com')
        activity = Activity.objects.create(name='Running', user=user)
        self.assertEqual(activity.name, 'Running')
        self.assertEqual(activity.user.username, 'testuser2')

    def test_create_leaderboard(self):
        team = Team.objects.create(name='Test Team 2')
        leaderboard = Leaderboard.objects.create(team=team, points=100)
        self.assertEqual(leaderboard.team.name, 'Test Team 2')
        self.assertEqual(leaderboard.points, 100)

    def test_create_workout(self):
        workout = Workout.objects.create(name='Pushups', difficulty='Medium')
        self.assertEqual(workout.name, 'Pushups')
        self.assertEqual(workout.difficulty, 'Medium')
