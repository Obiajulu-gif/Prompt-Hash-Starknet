export const PROMPTHASH_STARKNET_ADDRESS: `0x${string}` = '0x14a3eaf54502c90d7c81cde510a4ecc692aaef1459d1638a40f404d0b9abfcf';

export const PROMPTHASH_STARKNET_ABI = [
  {
    "type": "impl",
    "name": "PromptHashImpl",
    "interface_name": "prompt_hash_starknet::IPromptHash"
  },
  {
    "type": "struct",
    "name": "core::byte_array::ByteArray",
    "members": [
      {
        "name": "data",
        "type": "core::array::Array::<core::bytes_31::bytes31>"
      },
      {
        "name": "pending_word",
        "type": "core::felt252"
      },
      {
        "name": "pending_word_len",
        "type": "core::integer::u32"
      }
    ]
  },
  {
    "type": "struct",
    "name": "core::integer::u256",
    "members": [
      {
        "name": "low",
        "type": "core::integer::u128"
      },
      {
        "name": "high",
        "type": "core::integer::u128"
      }
    ]
  },
  {
    "type": "enum",
    "name": "core::bool",
    "variants": [
      {
        "name": "False",
        "type": "()"
      },
      {
        "name": "True",
        "type": "()"
      }
    ]
  },
  {
    "type": "struct",
    "name": "prompt_hash_starknet::Prompt",
    "members": [
      {
        "name": "id",
        "type": "core::integer::u256"
      },
      {
        "name": "image_url",
        "type": "core::byte_array::ByteArray"
      },
      {
        "name": "description",
        "type": "core::byte_array::ByteArray"
      },
      {
        "name": "price",
        "type": "core::integer::u256"
      },
      {
        "name": "for_sale",
        "type": "core::bool"
      },
      {
        "name": "sold",
        "type": "core::bool"
      }
    ]
  },
  {
    "type": "interface",
    "name": "prompt_hash_starknet::IPromptHash",
    "items": [
      {
        "type": "function",
        "name": "create_prompt",
        "inputs": [
          {
            "name": "image_url",
            "type": "core::byte_array::ByteArray"
          },
          {
            "name": "description",
            "type": "core::byte_array::ByteArray"
          }
        ],
        "outputs": [
          {
            "type": "core::integer::u256"
          }
        ],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "list_prompt_for_sale",
        "inputs": [
          {
            "name": "token_id",
            "type": "core::integer::u256"
          },
          {
            "name": "price",
            "type": "core::integer::u256"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "buy_prompt",
        "inputs": [
          {
            "name": "token_id",
            "type": "core::integer::u256"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "get_all_prompts",
        "inputs": [],
        "outputs": [
          {
            "type": "core::array::Array::<prompt_hash_starknet::Prompt>"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "set_fee_percentage",
        "inputs": [
          {
            "name": "new_fee_percentage",
            "type": "core::integer::u256"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "set_fee_wallet",
        "inputs": [
          {
            "name": "new_fee_wallet",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "upgrade",
        "inputs": [
          {
            "name": "new_class_hash",
            "type": "core::starknet::class_hash::ClassHash"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      }
    ]
  },
  {
    "type": "constructor",
    "name": "constructor",
    "inputs": [
      {
        "name": "fee_wallet",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "strk_address",
        "type": "core::starknet::contract_address::ContractAddress"
      }
    ]
  },
  {
    "type": "event",
    "name": "prompt_hash_starknet::PromptHash::PromptCreated",
    "kind": "struct",
    "members": [
      {
        "name": "token_id",
        "type": "core::integer::u256",
        "kind": "key"
      },
      {
        "name": "creator",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "key"
      },
      {
        "name": "image_url",
        "type": "core::byte_array::ByteArray",
        "kind": "data"
      },
      {
        "name": "description",
        "type": "core::byte_array::ByteArray",
        "kind": "data"
      }
    ]
  },
  {
    "type": "event",
    "name": "prompt_hash_starknet::PromptHash::PromptListed",
    "kind": "struct",
    "members": [
      {
        "name": "token_id",
        "type": "core::integer::u256",
        "kind": "key"
      },
      {
        "name": "seller",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "key"
      },
      {
        "name": "price",
        "type": "core::integer::u256",
        "kind": "data"
      }
    ]
  },
  {
    "type": "event",
    "name": "prompt_hash_starknet::PromptHash::PromptSold",
    "kind": "struct",
    "members": [
      {
        "name": "token_id",
        "type": "core::integer::u256",
        "kind": "key"
      },
      {
        "name": "seller",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "key"
      },
      {
        "name": "buyer",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "key"
      },
      {
        "name": "price",
        "type": "core::integer::u256",
        "kind": "data"
      }
    ]
  },
  {
    "type": "event",
    "name": "prompt_hash_starknet::PromptHash::FeeUpdated",
    "kind": "struct",
    "members": [
      {
        "name": "new_fee_percentage",
        "type": "core::integer::u256",
        "kind": "data"
      }
    ]
  },
  {
    "type": "event",
    "name": "prompt_hash_starknet::PromptHash::FeeWalletUpdated",
    "kind": "struct",
    "members": [
      {
        "name": "new_fee_wallet",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "data"
      }
    ]
  },
  {
    "type": "event",
    "name": "openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferred",
    "kind": "struct",
    "members": [
      {
        "name": "previous_owner",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "key"
      },
      {
        "name": "new_owner",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "key"
      }
    ]
  },
  {
    "type": "event",
    "name": "openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferStarted",
    "kind": "struct",
    "members": [
      {
        "name": "previous_owner",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "key"
      },
      {
        "name": "new_owner",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "key"
      }
    ]
  },
  {
    "type": "event",
    "name": "openzeppelin_access::ownable::ownable::OwnableComponent::Event",
    "kind": "enum",
    "variants": [
      {
        "name": "OwnershipTransferred",
        "type": "openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferred",
        "kind": "nested"
      },
      {
        "name": "OwnershipTransferStarted",
        "type": "openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferStarted",
        "kind": "nested"
      }
    ]
  },
  {
    "type": "event",
    "name": "openzeppelin_token::erc721::erc721::ERC721Component::Transfer",
    "kind": "struct",
    "members": [
      {
        "name": "from",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "key"
      },
      {
        "name": "to",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "key"
      },
      {
        "name": "token_id",
        "type": "core::integer::u256",
        "kind": "key"
      }
    ]
  },
  {
    "type": "event",
    "name": "openzeppelin_token::erc721::erc721::ERC721Component::Approval",
    "kind": "struct",
    "members": [
      {
        "name": "owner",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "key"
      },
      {
        "name": "approved",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "key"
      },
      {
        "name": "token_id",
        "type": "core::integer::u256",
        "kind": "key"
      }
    ]
  },
  {
    "type": "event",
    "name": "openzeppelin_token::erc721::erc721::ERC721Component::ApprovalForAll",
    "kind": "struct",
    "members": [
      {
        "name": "owner",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "key"
      },
      {
        "name": "operator",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "key"
      },
      {
        "name": "approved",
        "type": "core::bool",
        "kind": "data"
      }
    ]
  },
  {
    "type": "event",
    "name": "openzeppelin_token::erc721::erc721::ERC721Component::Event",
    "kind": "enum",
    "variants": [
      {
        "name": "Transfer",
        "type": "openzeppelin_token::erc721::erc721::ERC721Component::Transfer",
        "kind": "nested"
      },
      {
        "name": "Approval",
        "type": "openzeppelin_token::erc721::erc721::ERC721Component::Approval",
        "kind": "nested"
      },
      {
        "name": "ApprovalForAll",
        "type": "openzeppelin_token::erc721::erc721::ERC721Component::ApprovalForAll",
        "kind": "nested"
      }
    ]
  },
  {
    "type": "event",
    "name": "openzeppelin_introspection::src5::SRC5Component::Event",
    "kind": "enum",
    "variants": []
  },
  {
    "type": "event",
    "name": "openzeppelin_upgrades::upgradeable::UpgradeableComponent::Upgraded",
    "kind": "struct",
    "members": [
      {
        "name": "class_hash",
        "type": "core::starknet::class_hash::ClassHash",
        "kind": "data"
      }
    ]
  },
  {
    "type": "event",
    "name": "openzeppelin_upgrades::upgradeable::UpgradeableComponent::Event",
    "kind": "enum",
    "variants": [
      {
        "name": "Upgraded",
        "type": "openzeppelin_upgrades::upgradeable::UpgradeableComponent::Upgraded",
        "kind": "nested"
      }
    ]
  },
  {
    "type": "event",
    "name": "prompt_hash_starknet::PromptHash::Event",
    "kind": "enum",
    "variants": [
      {
        "name": "PromptCreated",
        "type": "prompt_hash_starknet::PromptHash::PromptCreated",
        "kind": "nested"
      },
      {
        "name": "PromptListed",
        "type": "prompt_hash_starknet::PromptHash::PromptListed",
        "kind": "nested"
      },
      {
        "name": "PromptSold",
        "type": "prompt_hash_starknet::PromptHash::PromptSold",
        "kind": "nested"
      },
      {
        "name": "FeeUpdated",
        "type": "prompt_hash_starknet::PromptHash::FeeUpdated",
        "kind": "nested"
      },
      {
        "name": "FeeWalletUpdated",
        "type": "prompt_hash_starknet::PromptHash::FeeWalletUpdated",
        "kind": "nested"
      },
      {
        "name": "OwnableEvent",
        "type": "openzeppelin_access::ownable::ownable::OwnableComponent::Event",
        "kind": "flat"
      },
      {
        "name": "ERC721Event",
        "type": "openzeppelin_token::erc721::erc721::ERC721Component::Event",
        "kind": "flat"
      },
      {
        "name": "SRC5Event",
        "type": "openzeppelin_introspection::src5::SRC5Component::Event",
        "kind": "flat"
      },
      {
        "name": "UpgradeableEvent",
        "type": "openzeppelin_upgrades::upgradeable::UpgradeableComponent::Event",
        "kind": "flat"
      }
    ]
  }
] as const;