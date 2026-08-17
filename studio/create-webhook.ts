const token = process.env.SANITY_AUTH_TOKEN
const projectId = 'u2kv1c58'
const secret = 'yousefReval_u2kv1c58_2026'

const hooks = [
  {
    name: 'Revalidate Vercel',
    url: `https://dr-mohamed-youssef.vercel.app/api/revalidate?secret=${secret}`,
  },
  {
    name: 'Revalidate Hostinger',
    url: `https://dr-mohamedyousef.com/api/revalidate?secret=${secret}`,
  },
]

async function run() {
  if (!token) {
    throw new Error('Missing SANITY_AUTH_TOKEN — run with: sanity exec create-webhook.ts --with-user-token')
  }

  const listRes = await fetch(`https://api.sanity.io/v2021-10-04/hooks/projects/${projectId}`, {
    headers: {Authorization: `Bearer ${token}`},
  })
  const existing = listRes.ok ? await listRes.json() : []
  const existingUrls = new Set((existing || []).map((h: {url?: string}) => h.url))

  for (const hook of hooks) {
    if (existingUrls.has(hook.url)) {
      console.log('Already exists:', hook.name)
      continue
    }

    const res = await fetch(`https://api.sanity.io/v2021-10-04/hooks/projects/${projectId}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: hook.name,
        dataset: 'production',
        url: hook.url,
      }),
    })

    const body = await res.json()
    if (!res.ok) {
      console.error('Failed', hook.name, res.status, body)
    } else {
      console.log('Created', hook.name)
    }
  }
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
