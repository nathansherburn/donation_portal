from django.core.management.base import BaseCommand

from donation.eaaxero import import_bank_transactions, import_trial_balance


class Command(BaseCommand):
    help = 'Manually import data from xero'

    def handle(self, *args, **options):
        import_bank_transactions()
        import_trial_balance()
        self.stdout.write('Successfully imported data from xero')
