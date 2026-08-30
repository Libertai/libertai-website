---
name: libertai-api
description: Use LibertAI's OpenAI-compatible confidential inference API for private, decentralized AI model calls (chat completions, embeddings, image generation) with no data logging and verifiable privacy via Trusted Execution Environments.
---

# LibertAI API Skill

This skill teaches agents how to call LibertAI's confidential inference API. LibertAI is an OpenAI-compatible, pay-per-token API running open-source models on decentralized infrastructure (Aleph Cloud) with TEE-backed privacy and no data logging.

## When to use this skill

- You need a private, decentralized LLM backend instead of OpenAI/Anthropic.
- You want OpenAI-compatible calls with no vendor lock-in.
- Your workload must not be logged, trained on, or exposed to a centralized provider.
- You need open-source models (e.g. GLM-5.3, Qwen3 Coder) with transparent pricing.

## Base URL and authentication

- Base URL: `https://api.libertai.io/v1`
- Auth: `Authorization: Bearer <LIBERTAI_API_KEY>` (create keys at https://console.libertai.io)
- Alternative auth: You can also use x402 payments, using the `@libertai/x402` npm package in TypeScript or `libertai-x402` pypi package in Python
- Compatibility: Drop-in replacement for the OpenAI SDK. Set `baseURL` / `base_url` and `api_key`.

## Chat completions (OpenAI-compatible)

```bash
curl https://api.libertai.io/v1/chat/completions \
  -H "Authorization: Bearer $LIBERTAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "glm-5.3",
    "messages": [
      {"role": "user", "content": "Say hello"}
    ]
  }'
```

Python (OpenAI SDK):

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.libertai.io/v1",
    api_key=os.environ["LIBERTAI_API_KEY"],
)

resp = client.chat.completions.create(
    model="glm-5.3",
    messages=[{"role": "user", "content": "Say hello"}],
)
print(resp.choices[0].message.content)
```

## Models

Current text models include `glm-5.3` (flagship), `qwen3.5-122b`, `gemma-4-31b`, `deepseek-v4-flash`, `qwen3-coder`, and `hermes-3-8b-tee` (TEE-served). Image generation and search are also available. See the live list and pricing at https://docs.libertai.io/apis/text/#pricing.

## References

- Docs: https://docs.libertai.io
- Console / API keys: https://console.libertai.io
- Pricing: https://docs.libertai.io/apis/text/#pricing
- Overview: https://libertai.io/llms.txt
