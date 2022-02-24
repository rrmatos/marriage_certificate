from brownie import accounts, config, SimpleStorage


def deploy_simple_storage():
    account = accounts[0]
    # account = accounts.load("rafael")
    simple_storage = SimpleStorage.deploy({"from": account})
    print(simple_storage)
    stored_value = simple_storage.retrieve()
    print(stored_value)
    transaction = simple_storage.store(15, {"from": account})
    transaction.wait(1)
    stored_value = simple_storage.retrieve()
    print(stored_value)

def main():
    deploy_simple_storage()