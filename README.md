<div align="center">
  <img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" width="650" height="auto"/>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/workflows/ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)

</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is comparatively.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then 

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.20.2`
* __Run:__ Mon Oct 12 2026 04:00:10 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 47693.6    | 20.47        | 8.51          |
| connect                  | 3.7.0    | ✗      | 47041.6    | 20.75        | 8.39          |
| kita                     | 1.1.36   | ✓      | 46537.6    | 20.98        | 8.34          |
| fastify                  | 4.29.1   | ✓      | 46478.4    | 21.02        | 8.33          |
| polka                    | 0.5.2    | ✓      | 46294.4    | 21.11        | 8.26          |
| rayo                     | 1.4.6    | ✓      | 45688.0    | 21.40        | 8.15          |
| server-base              | 7.1.32   | ✗      | 45643.2    | 21.41        | 8.14          |
| server-base-router       | 7.1.32   | ✓      | 45280.0    | 21.60        | 8.08          |
| polkadot                 | 1.0.0    | ✗      | 44002.4    | 22.23        | 7.85          |
| 0http                    | 3.5.3    | ✓      | 43840.8    | 22.31        | 7.82          |
| connect-router           | 1.3.8    | ✓      | 43089.6    | 22.72        | 7.68          |
| h3                       | 1.15.11  | ✗      | 41466.4    | 23.61        | 7.40          |
| h3-router                | 1.15.11  | ✓      | 39921.6    | 24.55        | 7.12          |
| restana                  | 4.9.9    | ✓      | 38968.8    | 25.16        | 6.95          |
| hono                     | 4.13.13  | ✓      | 38832.8    | 25.24        | 6.37          |
| koa                      | 2.16.4   | ✗      | 36415.8    | 26.97        | 6.49          |
| take-five                | 2.0.0    | ✓      | 35693.4    | 27.51        | 12.83         |
| restify                  | 11.1.0   | ✓      | 34599.0    | 28.40        | 6.24          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34195.8    | 28.75        | 6.10          |
| koa-router               | 12.0.1   | ✓      | 32993.8    | 29.81        | 5.88          |
| hapi                     | 21.4.10  | ✓      | 32456.2    | 30.30        | 5.79          |
| fastify-big-json         | 4.29.1   | ✓      | 11718.6    | 84.78        | 134.83        |
| express                  | 4.22.3   | ✓      | 10900.4    | 91.17        | 1.94          |
| express-with-middlewares | 4.22.3   | ✓      | 10238.1    | 97.07        | 3.81          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
